// components/ContactForm.tsx

import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import PageContainer from "@/components/PageContainer/PageContainer";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the form data to your backend or perform any other action here
    console.log({ name, email, message });

    // Clear the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header headerText={"About"} />
      <Nav />
      <PageContainer>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message:</Label>
            <TextArea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      </PageContainer>
    </>
  );
};

export default ContactPage;
