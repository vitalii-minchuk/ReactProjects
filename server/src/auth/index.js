const express = require("express");
const crypto = require("crypto");
const cookie = require("cookie");
const { getTokens, refreshTokenAge } = require("./utils");
const { fakeUser, passwordSecret } = require("./data");

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  const { name, password } = req.body;

  const hash = crypto
    .createHmac("sha256", passwordSecret)
    .update(password)
    .digest("hex");

  const isPasswordVerified = hash === fakeUser.passwordHash;

  if (name !== fakeUser.name || !isPasswordVerified) {
    return res.status(401).send("Login fail");
  }

  const { accessToken, refreshToken } = getTokens(name);

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: refreshTokenAge,
    })
  );

  res.send({ accessToken });
});

module.exports = authRouter;
