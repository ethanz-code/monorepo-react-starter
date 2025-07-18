# monorepo-react-starter

现代化 Monorepo 架构的 React 起始项目，基于 Vite、React 19、TypeScript，内置 TailwindCSS 4 原子化方案，采用 pnpm 作为包管理工具，适合中大型团队高效开发与协作。

## 项目亮点

- **Monorepo 架构**：基于 pnpm workspace，支持多包统一管理，便于模块复用与团队协作。
- **React 19 + Vite**：极速开发体验，支持最新函数组件与 Hooks。
- **TypeScript 全量类型支持**：类型安全无忧。
- **TailwindCSS 4 原子化 CSS**：极致灵活的样式方案，支持自定义扩展。
- **严格代码规范**：集成 ESLint、Prettier、Commitlint、Husky，保障团队代码质量。
- **现代化开发体验**：支持 VSCode + TypeScript，类型推断与高亮无缝体验。

## 目录结构

```text
monorepo-react-starter/
├── packages/                # Monorepo 子包（可扩展自定义工具包）
├── src/                     # 主应用源码
│   ├── views/               # 页面组件
│   ├── router/              # 路由配置
│   ├── assets/              # 静态资源和全局样式
│   ├── App.tsx              # 应用根组件
│   └── main.tsx             # 应用入口
├── public/                  # 公共资源
├── package.json             # 根包配置，依赖与脚本
├── pnpm-workspace.yaml      # Monorepo 配置
├── vite.config.ts           # Vite 配置，已集成 TailwindCSS
└── ...                      # 其他配置文件
```

## 快速开始

### 环境要求

- Node.js 18 及以上
- [pnpm](https://pnpm.io/) 10 及以上

### 安装依赖

```sh
pnpm install
```

### 启动开发服务器

```sh
pnpm dev           # 启动开发服务器
```

### 构建项目

```sh
pnpm build         # 构建生产版本
pnpm preview       # 预览生产构建
```

### 代码检查与格式化

```sh
pnpm lint          # 代码规范检查（oxlint + eslint）
pnpm format        # 代码格式化
pnpm commit        # 交互式提交
```

## 推荐开发工具

- [VSCode](https://code.visualstudio.com/) + TypeScript 支持

## 依赖说明

本项目主要依赖如下：

**核心框架**

- `react@19` - React 核心库
- `react-dom@19` - React DOM 渲染
- `react-router@7` - 路由管理

**构建工具**

- `vite` - 构建工具
- `@vitejs/plugin-react-swc` - React SWC 插件
- `typescript` - TypeScript 支持

**样式方案**

- `tailwindcss@4` - 原子化 CSS 框架
- `@tailwindcss/vite` - TailwindCSS Vite 插件

**状态管理**

- `@ethan-utils/zustand` - Zustand 状态管理
- `@ethan-utils/axios` - Axios HTTP 客户端

**代码质量**

- `eslint` + `oxlint` - 代码检查
- `prettier` - 代码格式化
- `husky` + `lint-staged` - Git 钩子
- `commitlint` - 提交信息规范

详细依赖列表请查看 package.json 文件

## 代码规范与提交

- 采用 ESLint + Prettier 统一代码风格
- 提交前自动 lint & format
- 使用 Commitlint 规范提交信息
- Husky 钩子自动化流程

## 进阶用法

- 可在 `packages/` 目录下扩展自定义工具包
- TailwindCSS 配置可在根目录自定义
- 支持多环境配置与环境变量注入

## 参考文档

- [Vite 官方文档](https://vitejs.dev/)
- [React 官方文档](https://react.dev/)
- [React Router 官方文档](https://reactrouter.com/)
- [TailwindCSS 官方文档](https://tailwindcss.com/)
- [pnpm 官方文档](https://pnpm.io/)

---

由 React、React Router、TailwindCSS、pnpm workspace 强力驱动。
