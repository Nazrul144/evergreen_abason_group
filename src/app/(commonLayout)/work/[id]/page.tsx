import WorkDetails from '@/pages/mainPages/workPage/WorkDetails';


const page = async({ params }: { params: { id: string } }) => {
    const id = Number((await params).id);
    console.log(id);
  return (
    <div>
        <WorkDetails id={id}/>
    </div>
  )
}

export default page