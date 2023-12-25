import User from "../models/user.models.js";
import { ApiError } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const { email, username } = req.body;

  const existingUser = await User.findOne({ where: { email: email } });

  if (existingUser) {
    throw new ApiError(409, "User with email or username already exists", []);
  }

  const newUser = await User.create({ email, username });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { user: newUser }, "Users registered successfully.")
    );
});

// return res
//   .status(200)
//   .json(
//     new ApiResponse(
//       200,
//       { user: createdUser },
//           "Users registered successfully and verification email has been sent on your email."
//     )
//   );

export { registerUser };
