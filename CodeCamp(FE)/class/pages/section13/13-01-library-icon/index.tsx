import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Divider } from "antd";
const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 50px;
`;
export default function LibraryIconPage() {
  const onClickDelete = (event: any): void => {
    console.log(event.currentTarget.id);
  };
  return (
    <span id="삭제할게시글ID" onClick={onClickDelete}>
      <MyIcon />;
    </span>
  );
}
