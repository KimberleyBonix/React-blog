export type Category = {
  id: number;
  slug: string;
  name: string;
};

export type Post = {
  category: Category;
  categoryId: number;
  content: string;
  excerpt: string;
  id: number;
  slug: string;
  title: string;
};

export type SinglePost = Omit<Post, 'category'>;
