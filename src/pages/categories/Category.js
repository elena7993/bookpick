import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { Combobox } from "evergreen-ui";

const CategoryName = styled.div``;
const BookList = styled.div``;

const Category = () => {
  return (
    <Wrapper>
      <Header />
      <Category>
        <div className="c_name">소설/시/희곡</div>
        <Combobox
          openOnFocus
          items={["이름순", "최신등록순"]}
          onChange={(selected) => console.log(selected)}
          placeholder="정렬"
        />
      </Category>
      <BookList></BookList>
    </Wrapper>
  );
};

export default Category;
