import styled from "styled-components";

export const Container = styled.div`
`

export const DashboardBox = styled.div`
  height: 29em;
  background-color: black;
`
export const DashboardInfo = styled.div`
    margin-left: 2.2rem;
    width: 41.6%;
    height: 72%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1, p{
      color: white;
    }  

    h1 {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: .5rem;
    }

    p {
      margin-bottom: .9rem;
    }  
`

export const ButtonContainer = styled.div`
  display: flex;

  div > button {
    height: 3.1rem;
    font-size: 1.5rem;
    border-radius: .5rem;
    border: none;
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
    width: 15.9rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Icon {
    margin-right: .4rem;
  }
`

export const AgeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 8%;
  left: 51.5rem;

  .ReplayButton {
    color: white;
    padding: .5rem;     
    width: 2.7rem;
    height: 2.7rem;
    border: .2rem solid;
    border-radius: 50%;
    transform: translateY(.9rem) translateX(-.8rem);
  }

  div {
    display: flex;
    align-items: center;
    height: 1.5rem;
    width: 5rem;
    background-color: #525252;
    border-left: 5px solid white;
    font-weight: bold;
    padding-left: 1.2rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    height: 1.5rem;
    background-color: #e3bf0e;
  }
`


