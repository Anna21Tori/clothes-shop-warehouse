import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Link = styled(NavLink)`
                        color: gray;
                        text-decoration: none;
                        &:hover{
                            color: black;
                        }
                        &.active{
                            color: black;
                        }
                    `