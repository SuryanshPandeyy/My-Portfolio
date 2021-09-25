export const getStaticPaths = async () => {
  const res = await fetch(`/public/json/Templates/Business`);
  const data = await res.json();

  const paths = data.map((curr) => {
    return {
      params: {
        pageid: curr.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageid;
  const res = await fetch(`/public/json/Templates/Business/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const TemplateData = ({ data }) => {
  return (
    <>
      <iframe style={{backgroundColor: 'white'}} src={`https://suryanshpsurya.github.io/${data.id}`}></iframe>
      <div style={{ height: "20rem", color: "#fff" }}>{data.title}</div>
    </>
  );
};

export default TemplateData;
