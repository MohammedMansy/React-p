import styled from 'styled-components';

export const ContactSection = styled.section`
    padding: 50px 0;
    text-align: center;
`
export const ContactTittle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    @media (max-width:575px) {
            font-size: 40px;
    }
`

export const Span = styled.span`
    font-weight: normal
`
export const From = styled.form`
    width: 70%;
    margin: auto;
    @media (max-width:575px) {
        width: 90%;
    }
`
export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
`
export const FormInput = styled.div`
    overflow: hidden;
`

export const InputText = styled(Input)`
    float: left;
    width: 49%;
    @media (max-width:575px) {
        width: 100%;
    }
`
export const InputEmail = styled(Input)`
    float: right;
    width: 49%;
    @media (max-width:575px) {
        width: 100%;
    }
`
export const InputSub = styled(Input) `
    width: 100%;
`

export const Textarea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc;
    resize:none;
    height:160px;
`
export const InputSubmit = styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`

