import { Button, Form, Input, Modal, Space, Tag, Tree } from "antd";
import React, { useMemo, useState } from "react";
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
  const treeData = [
    {
      title: "parent 1",
      key: "0-0",
      selectable: false,
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          selectable: false,
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
          selectable: false,
          children: [
            {
              title: "lichang",
              key: "0-0-1-0",
            },
          ],
        },
      ],
    },
  ];
  interface tagDataType {
    title: string;
    key: string;
    children?: tagDataType;
  }
  const [tagData, setTagData] = useState<tagDataType[]>([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClose = (value: tagDataType) => {
    let dataArr = tagData.filter((item) => {
      return item.key !== value.key;
    });
    setTagData([...dataArr]);
  };

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    setTagData(info.selectedNodes);
  };

  const selectedKeys = useMemo(() => {
    return tagData.map((item) => {
      return item.key;
    });
  }, [tagData]);

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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="关联组织"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <div style={{ display: "flex" }}>
          <div>
            <Input.Search
              placeholder="请输入组织名称"
              allowClear
              style={{ width: 200 }}
            />
            <Tree
              defaultExpandAll
              selectedKeys={selectedKeys}
              showLine={{ showLeafIcon: false }}
              multiple
              onSelect={onSelect}
              treeData={treeData}
            />
          </div>

          <div>
            <p>已选（{tagData?.length}）</p>
            <Space size={[8, 16]} wrap>
              {tagData?.map((item) => {
                return (
                  <Tag
                    closable
                    color="processing"
                    key={item.key}
                    onClose={() => {
                      handleClose(item);
                    }}
                  >
                    {item.title}
                  </Tag>
                );
              })}
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Lianxi;
