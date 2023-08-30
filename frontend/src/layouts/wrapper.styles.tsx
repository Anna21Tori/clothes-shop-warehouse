import { CircularProgress } from "@mui/material";
import { styled } from "styled-components";

export const MainContent = styled.div`
                                height: calc(100vw - 60px);
                            `
export  const Progress = styled(CircularProgress)`
                            position: fixed;
                            top: 50%;
                            left: 50%;
                        `