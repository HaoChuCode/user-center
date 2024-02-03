import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '浩初出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://wx.zsxq.com/dweb2/index/group/51122858222824',
          blankTarget: true,
        },
        {
          key: 'gitee',
          title: (
            <>
              <GithubOutlined /> 浩初 HaoChuCode
            </>
          ),
          href: 'https://github.com/HaoChuCode',
          blankTarget: true,
        },
        {
          key: 'code',
          title: '编程导航',
          href: 'https://www.codefather.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
