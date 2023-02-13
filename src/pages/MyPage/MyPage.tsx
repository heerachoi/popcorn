// firebase import
// const current = "kWhtWlL0n4auOkXnR3t7lmXQn8r1";
import MyProfile from '../../components/MyPage/MyProfile';
import DeleteAccount from '../../components/Authentication/DeleteAccount/DeleteAccount';
import UpdatePassword from '../../components/Authentication/UpdatePassword/UpdatePassword';

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
