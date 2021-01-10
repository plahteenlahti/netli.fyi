import React from "react"
import { Link } from "gatsby"
import gradient from "../images/gradient.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

const IndexPage = () => {
  const productName = "Deploys"
  return (
    <Layout>
      <SEO title="Home" />

      <Grid>
        {/* Row 1 */}

        <Cell span={4}>
          <Container>
            <ProductName>{productName}</ProductName>
            <Title>Manage your Netlify sites on the go.</Title>
          </Container>
        </Cell>
        <Cell span={2}>
          <Container>
            <h3>Get it today</h3>
          </Container>
        </Cell>

        {/* Row 2 */}

        <Cell span={2}>
          <Feature>
            <h3>Manage Your Sites</h3>
            <P>Manage you sites</P>
          </Feature>
        </Cell>
        <Cell span={2}>
          <Feature>
            <h3>View Form Submissions</h3>
            <P>Manage you sites</P>
          </Feature>
        </Cell>
        <Cell span={2}>
          <Feature>
            <h3>View Form Submissions</h3>
            <P>Manage you sites</P>
          </Feature>
        </Cell>

        {/* Row 3 */}

        <Cell span={2}>
          <Feature>
            <h3>Multiple accounts</h3>
            <P>
              Maybe you have two Netlify accounts and maybe you don't want to
              logout to use the other one all the time. Well, know you can do
              that.
            </P>
          </Feature>
        </Cell>

        <Cell span={4}>
          <Row>
            <LeftColumn>
              <h3>Dark & Light Mode</h3>
              <P>Use light or dark, your choice.</P>
            </LeftColumn>
            <UIContainer></UIContainer>
          </Row>
        </Cell>

        {/* Row 4 */}

        <Cell span={6}></Cell>
      </Grid>
    </Layout>
  )
}

export default IndexPage

const rotateHue = keyframes`
	from {
		filter: hue-rotate(-30deg);
	}
	to {
		filter: hue-rotate(30deg);
	}        
`

const Grid = styled.div`
  margin: 32px auto 0px;
  padding: 0px 32px;
  max-width: 1376px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 32px;
`

type ColumnProps = {
  span: number
}

const Cell = styled.div<ColumnProps>`
  background-color: ${({ theme }) => theme.secondaryBackground};
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 464px;
  grid-area: ${({ span }) => `span 1 / span ${span} / auto / auto;`};
  border-radius: 16px;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    padding: 0px 24px;
    flex-direction: column;
    height: auto;
    grid-column: span 6 / auto;
  }
`
const Container = styled.div`
  padding: 32px;
`

const ProductName = styled.span`
  color: ${({ theme }) => theme.secondaryText};
`
const Title = styled.h1`
  line-height: 4rem;
  font-size: 3.5rem;
  max-width: 75%;

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  background-image: url(${gradient});

  color: ${({ theme }) => theme.primaryText};
  animation: ${rotateHue} 5s ease-in-out infinite alternate;

  @media screen and (max-width: 1000px) {
    text-align: center;
    line-height: 3rem;
    font-size: 2.5rem;
    max-width: 100%;
  }
`

const Feature = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  height: 100%;
`

const P = styled.p`
  color: ${({ theme }) => theme.secondaryText};
`

const UIContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${gradient});
  animation: ${rotateHue} 5s ease-in-out infinite alternate;
  border-radius: 16px;
`

const Row = styled.div`
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LeftColumn = styled.div`
  margin-right: 32px;
`