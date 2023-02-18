import React from 'react';
import Footer from './footer';
import Result from './result';
  
const Home = () => {
  return (
    <div>
    <span class="headline hl1">Breaking News:</span><span class="headline hl11"> You can now check truthfull summary with news URL below. Did You Try?</span>
      <div class="searchcontainer">
        <form action="/" method="GET" class="form">
            <input type="search" placeholder="Enter Your URL" class="search-field" />
            <button type="submit" class="search-button">Search</button>
        </form>
      </div>
      <Result></Result>
    <Footer></Footer>
    </div>
  );
};
  
export default Home;