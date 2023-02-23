import React from "react";
import Header from "../layouts/Header";
import Map from "../sections/search/Map";
import SearchToolbar from "../sections/search/SearchToolbar";
import UserList from "../sections/search/UserList";

const Search = () => {
  return (
    <div>
      <Header />
      <SearchToolbar />

      {/* <!-- main --> */}
      <section className="padding py-4 grid grid-cols-1 md:grid-cols-[350px_1fr] gap-3 h-[2000px]">
        <UserList />
        <Map />
      </section>
    </div>
  );
};

export default Search;
