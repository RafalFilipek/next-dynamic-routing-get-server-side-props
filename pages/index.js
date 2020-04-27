import Link from "next/link";

export default (props) => {
  return (
    <div>
      <Link href="/foo">
        <a>foo</a>
      </Link>
      <pre>{JSON.stringify(props.data)}</pre>
    </div>
  );
};

export const getServerSideProps = ({ req, res, ...rest }, next) => {
  console.log(req.url, rest);
  return {
    props: {
      data: 2,
    },
  };
};
