import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { MdSearch , MdError } from 'react-icons/md'

const Search = () => {
    const [ user , setUser ] = React.useState('');
    const { requests , error , searchGithubUser , isLoading } = React.useContext(GithubContext);
    
    // Submit function get things from global context for search
    const handleSubmit = ( e ) => {
      e.preventDefault();
      // search(submitbutton) implement when u type something in input
      // if user enter something
      if(user) {
        searchGithubUser(user);
        setUser('')
      }
    }

    return (
        <section className='section'>
            <Wrapper className="section-center">
              { error.showErr === true && (
                <ErrorWrapper>
                  <p>{error.msg}</p>
                </ErrorWrapper> )
              }
              <form onSubmit={handleSubmit}>
                <div className='form-control'>  
                  <MdSearch />
                  <input type='text'  
                         placeholder='Enter user name...' 
                         value={user} 
                         onChange={(e) => setUser(e.target.value)}
                  />
                  {requests > 0 && !isLoading && <button type='submit'>Search</button> }
                </div>
              </form>
              <h3>Request: {requests} / 60</h3>
            </Wrapper>
        </section>
    )
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.6rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-6);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border: none;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-7);
        color: var(--clr-primary-1);
      }
    }
    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-6);
    font-weight: 370;
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
    text-shadow: 3px 3px 6px lightcoral;
    font-weight: 500;
  }
`;

export default Search


