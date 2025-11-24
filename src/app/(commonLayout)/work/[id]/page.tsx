import WorkDetails from '@/pages/mainPages/workPage/WorkDetails';

const page = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const title = "Project A";
  const description = "This is a description of Project A.";
  const image = "/images/projectA.jpg"; 

  return (
    <div>
      <WorkDetails
        title={title}
        description={description}
        image={image}
        id={id} 
      />
    </div>
  );
};

export default page;
