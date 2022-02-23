import { Button, Form, Input, Tag, Tree } from "antd";
import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const Lianxi: React.FC = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log("selected", selectedKeys, info);
  };

  const [tagData, setTagData] = useState([]);
  const onCheck = (checkedKeys: any, e: any) => {
    console.log("onCheck", checkedKeys, e.checkedNodesPositions);
    setTagData(e.checkedNodesPositions);
    // setCheckedKeys(checkedKeysValue);
  };

  // const onCheck = (checked: React.Key[], info: any) => {
  //   console.log("onCheck", checked, info);
  // };
  const treeData = [
    {
      title: "parent 1",
      key: "0-0",
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          children: [
            {
              title: "leaf",
              key: "0-0-0-0",
            },
            {
              title: "leaf",
              key: "0-0-0-1",
            },
          ],
        },
        {
          title: "parent 1-1",
          key: "0-0-1",
          children: [
            {
              title: <span style={{ color: "#1890ff" }}>sss</span>,
              key: "0-0-1-0",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
      >
        <Form.List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 passengers"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Passengers" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="passenger name"
                      style={{ width: "60%" }}
                      onClick={() => {
                        console.log(field);
                      }}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    add("The head item", 0);
                  }}
                  style={{ width: "60%", marginTop: "20px" }}
                  icon={<PlusOutlined />}
                >
                  Add field at head
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <hr />
      <Tree
        checkable
        defaultExpandedKeys={["0-0-0", "0-0-1"]}
        defaultSelectedKeys={["0-0-0", "0-0-1"]}
        defaultCheckedKeys={["0-0-0", "0-0-1"]}
        onSelect={() => {
          console.log("kkkk");
        }}
        onCheck={onCheck}
        treeData={treeData}
      />
      {tagData.map((item) => {
        <Tag>{item}</Tag>;
      })}
    </div>
  );
};
export default Lianxi;
