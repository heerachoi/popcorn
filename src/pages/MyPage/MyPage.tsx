import DeleteAccount from '../../components/Authentication/DeleteAccount/DeleteAccount';
import UpdatePassword from '../../components/Authentication/UpdatePassword/UpdatePassword';
import MyProfile from '../../components/MyPage/MyProfile';
const MyPage: any = () => {
  return (
    <>
      <MyProfile />
      <DeleteAccount />
      <UpdatePassword />
    </>
  );
};

export default MyPage;
