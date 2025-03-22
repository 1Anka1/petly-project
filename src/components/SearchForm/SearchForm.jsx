import * as SC from './SearchFrom.styled.js';

export default function SearchFrom() {
  return (
    <SC.SearchForm>
      <SC.SearchInput placeholder="Search" />
      <SC.SearchButton type="submit">
        <svg width="24" height="24">
          <use href="/images/sprite.svg#search"></use>
        </svg>
      </SC.SearchButton>
    </SC.SearchForm>
  );
}
