import React from "react"

import { 
    Wrapper,
    Content,
    AvatarWrapper,
    ListSocialMedia,
    ListSkills,
    SkillsWrapper,
 } from "./styles"

 import Avatar from "../../components/Avatar";
 import Button from "../../components/Button";
 import Label from "../../components/Label";
import { FaFacebookF } from "react-icons/fa";
 
function MainSection() {
    return (
        <Wrapper>
            <Content>
                <AvatarWrapper>
                    <Avatar 
                        size={130}
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw9Vl4RFU3bkTWp9Ok0yYkZzuAYIVJhJxttkScvUInteNh-Cg-"
                    />
                    <h1>Vitor Manoel Vieira</h1>
                    <p>Dunno Developer</p>
                    <ListSocialMedia>
                        <li>
                            <a aria-label="Facebook Profile Link" href="#" target=" blank" rel="noopener nofererrer">
                                <FaFacebookF />
                            </a>
                        </li>
                    </ListSocialMedia>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </AvatarWrapper>
                <SkillsWrapper>
                    <h2>Skills</h2>
                    <ListSkills>
                        <li>
                            <Label>React</Label>
                        </li>
                        <li>
                            <Label>HTML</Label>
                        </li>
                        <li>
                            <Label>CSS</Label>
                        </li>
                        <li>
                            <Label>JavaScript</Label>
                        </li>
                    </ListSkills>
                </SkillsWrapper>
                <Button as="button" href="mailto:vitor.buzo.spam@gmail.com">
                    Me Contrate
                </Button>

            </Content>
        </Wrapper>
    )
}

export default MainSection;