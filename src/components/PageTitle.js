import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | BOOKPICK</title>
    </Helmet>
  );
};

export default PageTitle;