import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  FormLabel,
} from "@mui/material";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // Here you can implement your sign-up logic, like sending data to a backend
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Bio:", bio);
    console.log("Agreed to Terms:", agreed);
    console.log("Gender:", gender);
    console.log("Role:", role);
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBio("");
    setAgreed(false);
    setGender("");
    setRole("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Adjust as needed to center the form vertically
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSignUp}
        sx={{
          width: "400px", // Adjust width as needed
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          type="text"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          type="text"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextareaAutosize
          minRows={3}
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={{ width: "100%", padding: "8px", resize: "vertical" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
          }
          label="I agree to the terms and conditions"
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Role"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
