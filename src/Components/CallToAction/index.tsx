import styled from "styled-components";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    padding: 0 1rem;
`;

const Logo = styled.h1`
    margin: 0;
    background: -webkit-linear-gradient(
        43deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(212, 212, 212, 1) 10%,
        rgba(246, 246, 246, 1) 49%,
        rgba(255, 255, 255, 1) 87%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 60px;
    letter-spacing: 0.2rem;
`;

const Slogan = styled.h2`
    margin: 0;
    background: -webkit-linear-gradient(
        43deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(212, 212, 212, 1) 10%,
        rgba(246, 246, 246, 1) 49%,
        rgba(255, 255, 255, 1) 87%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-weight: 600;
    font-size: 30px;
    margin-top: 2rem;
    letter-spacing: 0.1rem;
`;

const Blurb = styled.p`
    color: whitesmoke;
    padding: 0 1rem;
    line-height: 1.5rem;
    max-width: 70ch;
    margin-top: 2rem;
`;

const Button = styled.button`
    background-color: #60c977;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 2rem;
    letter-spacing: 0.1rem;

    &:hover {
        background-color: #256c34;
    }
`;

export const CallToAction = () => {
    return (
        <TopSectionContainer>
            <Logo>Global Warming</Logo>
            <Slogan>Fun for the whole family</Slogan>
            <Blurb>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi a id unde, beatae soluta
                laboriosam voluptatem et officiis debitis voluptate deserunt dolore quia. Tempore vero corrupti enim
                laborum suscipit distinctio? Molestiae, placeat repellat obcaecati unde modi illo, consequatur pariatur
                officiis deserunt corrupti totam doloribus nihil similique suscipit autem dolorem!
            </Blurb>
            <Button>Donate</Button>
        </TopSectionContainer>
    );
};
