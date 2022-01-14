import styled from "styled-components";

export const Container = styled.div`
`

export const DashboardBox = styled.div`
  height: 26.5em;
  background-color: blue;
`
export const DashboardInfo = styled.div`
    margin-left: 2.2rem;
    background-color: black;
    width: 41.6%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      background-color: red;
      }       
`

export const ButtonContainer = styled.div`
  display: flex;

  div > button {
    height: 3.3rem;
    font-size: 1.5rem;
    border-radius: .5rem;
  }

  div:first-of-type {
    margin-right: .4rem;
  }

  div:first-of-type > button {
    width: 10rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:last-of-type > button {
    color: white;
    background-color: rgba(109, 109, 110, 0.7);
    width: 15.2rem;
    padding-left: 1rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Icon {
    margin-right: .4rem;
  }
`


