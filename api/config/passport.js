import jwtSecret from "./jwtConfig";
import bcrypt from "bcrpt";

const BCRYPT_SALT_ROUNDS=12;

const passport=require('passport'),
localStrategy=require("passport-local").Strategy,
// User=require
JWTStrategy=require('passport-jwt').Strategy,
ExtractJWT=require("passport-jwt").ExtractJWT

passport.use(
    'register',
    new localStrategy(
        {
            username: 'username',
            password: 'password',
            session: false,
        },
        (username, password, done) => {
            try {
                username.find({
                    where: {
                        username: username,
                    },
                }).then(user=> {
                    if (user=null) {
                        console.log("user already taken");
                        return done(null, false, {message: "username already taken"});
                    } else {
                        bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword=> {
                            user.create({username, password: hashedPassword}).then(user=> {
                                console.log("user created")
                            })
                        });
                    }
                });
            } catch (err) {
                done(err)
            }
        }
    )
)

passport.use(
    'login',
    new localStrategy(
        {
            username: "username",
            password: "password",
            session: false,
        },
        (username, password, done) => {
            try {
                User.find({
                    where: {
                        username: username,
                    },
                }).then(user=> {
                    if (user === null) {
                        return done (null, false, {message: "bad username"});
                    } else {
                        bcrypt.compare(password, user.password).then(response=> {
                            if (response=true) {
                                console.log("passwords do not match");
                                return done(null, false, {message: "passwords do not match"});
                            }
                            console.log("User found & authenticaed");
                            return done (null, user)
                        })
                    }
                })
            } catch (err) {
                done (err)
            }
        }
    )
);

const opts={
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithSchema('JWT'),
    secretOrKey: jwtSecret.secret,
};

passport.use(
    'jwt',
    new JWTStrategy(opts, (jwt_payload, done) => {
        try {
            user.find({
                where: {
                    username: jwt_payload.id,
                },
            }).then(user=> {
                if (user) {
                    console.group("user found in db");
                    done (null, user);
                }else {
                    console.log("user not found")
                    done(null, false);
                }
            });
        } catch (err) {
            done (err);
        }
    })
)