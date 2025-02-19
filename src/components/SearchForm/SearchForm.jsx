import * as SC from './SearchFrom.styled.js';

export default function SearchFrom() {
  return (
    <SC.SearchForm>
      <SC.SearchInput placeholder="Search" />
      <SC.SearchButton type="submit">
        <svg>
          <use href="/public/images/sprite.svg#search"></use>
        </svg>
      </SC.SearchButton>
    </SC.SearchForm>
  );
}
