import React, { useEffect } from 'react';
import Users from '../components/Users';
import { connect } from 'react-redux';
import { getUsers } from '../modules/users';
// 서버 사이드에서 promises 수집 및 끝날때까지 기다렸다가 데이터 채워서 컴포넌트에 뿌림
import { Preloader } from '../lib/PreloadContext';

const UsersContainer = ({ users, getUsers }) => {
  // 컴포넌트가 마운트되고 나서 호출
  useEffect(() => {
    if (users) return; // users 가 이미 유효하다면 요청하지 않음.
    getUsers();
  }, [getUsers, users]);
  // return <Users users={users} />;
  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
};

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  {
    getUsers,
  },
)(UsersContainer);
