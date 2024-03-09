interface UserIdPageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: UserIdPageProps) => {
  return <div>User ID :{params.userId}</div>;
};

export default Page;
