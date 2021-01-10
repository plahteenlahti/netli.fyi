import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import gradient from "../images/gradient.png"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage: FC = () => {
  const productName = "Deploys"

  const { lightUI, darkUI } = useStaticQuery(graphql`
    query {
      lightUI: file(relativePath: { eq: "light-ui.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darkUI: file(relativePath: { eq: "dark-ui.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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

            <Button>
              <ButtonBG />
              <ButtonContent>
                <ButtonText>
                  <FontAwesomeIcon icon={faApple} />
                  <span>Download for iOS</span>
                </ButtonText>
              </ButtonContent>
            </Button>

            <Button>
              <ButtonBG />
              <ButtonContent>
                <ButtonText>
                  <FontAwesomeIcon icon={faAndroid} />
                  <span>Download for Android</span>
                </ButtonText>
              </ButtonContent>
            </Button>
          </Container>
        </Cell>

        {/* Row 2 */}

        <Cell span={2}>
          <Feature>
            <h3>Manage Your Sites</h3>
            <P>
              Maybe you have two Netlify accounts and maybe you don't want to
              logout to use the other one all the time. Well, know you can do
              that.
            </P>
          </Feature>
        </Cell>
        <Cell span={2}>
          <Feature>
            <h3>View Form Submissions</h3>
            <P>
              Maybe you have two Netlify accounts and maybe you don't want to
              logout to use the other one all the time. Well, know you can do
              that.
            </P>
          </Feature>
        </Cell>
        <Cell span={2}>
          <Feature>
            <h3>Manage Builds & Deploys</h3>
            <P>
              Maybe you have two Netlify accounts and maybe you don't want to
              logout to use the other one all the time. Well, know you can do
              that.
            </P>
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
            <UIContainer>
              <DarkPreview>
                <Image image={darkUI?.childImageSharp?.fluid} />
              </DarkPreview>
              <LightPreview>
                <Image image={lightUI?.childImageSharp?.fluid} />
              </LightPreview>
            </UIContainer>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const ProductName = styled.span`
  color: ${({ theme }) => theme.secondaryText};
`
const Title = styled.h1`
  line-height: 4rem;
  font-size: 3.5rem;
  max-width: 55%;

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
  position: relative;
  background-image: url(${gradient});
  background-size: cover;
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

const pulse = keyframes`
	0% {
		-webkit-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-filter: blur(4px);
		filter: blur(4px);
		border-radius: 18px;
	}

	33% {
		-webkit-transform: rotate(-0.5deg) translate(1px,-1px) scale(1.01);
		-ms-transform: rotate(-0.5deg) translate(1px,-1px) scale(1.01);
		transform: rotate(-0.5deg) translate(1px,-1px) scale(1.01);
		-webkit-filter: blur(5px);
		filter: blur(5px);
		border-radius: 12px;
	}

	67% {
		-webkit-transform: rotate(1deg) translate(-1px,-1px) scale(0.99);
		-ms-transform: rotate(1deg) translate(-1px,-1px) scale(0.99);
		transform: rotate(1deg) translate(-1px,-1px) scale(0.99);
		-webkit-filter: blur(7px);
		filter: blur(7px);
		border-radius: 24px;
	}

	100% {
		-webkit-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-filter: blur(4px);
		filter: blur(4px);
		border-radius: 18px;
	}
`

const ButtonBG = styled.div`
  display: block;
  position: absolute;
  filter: blur(1px);
  border-radius: 8px;
  opacity: 0.75;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  animation: 10s ease-in-out 0s infinite normal both running ${pulse};
  transition: opacity 1.5s ease 0s;
  background: conic-gradient(
    from 217.29deg at 51.63% 52.16%,
    rgb(36, 0, 255) 0deg,
    rgb(0, 135, 255) 19.5deg,
    rgb(255, 29, 122) 102.75deg,
    rgb(245, 56, 27) 152.25deg,
    rgb(255, 83, 53) 208.88deg,
    rgb(105, 30, 255) 291deg
  );
`

const Button = styled.div`
  margin: 16px 0px;
  position: relative;
  padding: 1px;
  border-radius: 8px;
  box-shadow: rgb(0, 0, 0) 0px 0px 40px;
  box-sizing: border-box;
`

const ButtonContent = styled.div`
  background-color: ${({ theme }) => theme.primaryBackground};
  padding: 16px;
  z-index: 2;
  position: relative;
  border-radius: 8px;
  box-sizing: border-box;
`
const ButtonText = styled.div`
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: url(${gradient});
  color: ${({ theme }) => theme.primaryText};
  animation: ${rotateHue} 5s ease-in-out infinite alternate;

  span {
    margin-left: 16px;
  }
`

const LightPreview = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.primaryText};
  height: 50%;
  bottom: 25%;
  right: 0;
  left: 25%;
  z-index: 1;
  border-top-left-radius: 8px;
  overflow: hidden;
`

const DarkPreview = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.primaryBackground};
  height: 50%;
  bottom: 0;
  left: 20%;
  right: 0;
  z-index: 2;
  border-top-left-radius: 8px;
  overflow: hidden;
`
