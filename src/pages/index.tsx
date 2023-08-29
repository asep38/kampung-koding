import { Container } from "react-bootstrap";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Home() {
  const [kursus, setKursusData] = useState();

  async function fetchQuery() {
    const baseUrl = `http://localhost:1337/api`;
    const response = await fetch(`${baseUrl}/kursuses/`);
    const data = await response.json();
    setKursusData(data);
    console.log(data);
    return data;
  }

  return (
    <>
      <Container>
        kursus
        <Button onClick={() => fetchQuery()}>ambil kursus</Button>
      </Container>
    </>
  );
}
