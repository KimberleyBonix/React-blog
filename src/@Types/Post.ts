// Data typing presets

// Category data type
export type Category = {
  id: number;
  slug: string;
  name: string;
};

// Post data type
export type Post = {
  category: Category;
  categoryId: number;
  content: string;
  excerpt: string;
  id: number;
  slug: string;
  title: string;
};

// Post data type without 'category'
export type SinglePost = Omit<Post, 'category'>;
