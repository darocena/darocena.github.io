import React from "react";
import styled from "styled-components";
import { NextPage } from "next";

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  min-height: 50vh;
  min-width: 50vw;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
`;

const ErrorDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem;
`;

const ErrorPage: NextPage<{ statusCode: number | undefined }> = ({
  statusCode,
}) => {
  return (
    <>
      <ErrorContainer>
        <ErrorTitle>{statusCode}</ErrorTitle>
        <ErrorDescription>Something went wrong</ErrorDescription>
      </ErrorContainer>
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode,
    ...{
      error: statusCode,
      meta: {
        title: "Error",
        keywords: "error, 404, 500, 403, 401, 400, 503, 502, 504, 505",
        description: "Error page",
      },
      header: {
        headerText: "Uh oh!💥 Something went wrong!😅",
      },
    },
  };
};

export default ErrorPage;
