import { createClient } from '@supabase/supabase-js';
import { QueryClient, useQuery, useMutation } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const queryClient = new QueryClient();

/**
 * Types for Supabase tables
 * 
 * Table: users
 * Columns:
 * - id: uuid
 * - username: text
 * - email: text
 * - created_at: timestamp
 * 
 * Table: posts
 * Columns:
 * - id: uuid
 * - user_id: uuid
 * - title: text
 * - content: text
 * - created_at: timestamp
 * 
 * Table: comments
 * Columns:
 * - id: uuid
 * - post_id: uuid
 * - user_id: uuid
 * - content: text
 * - created_at: timestamp
 */

// Hooks for users table
export const useUsers = () => useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw new Error(error.message);
    return data;
  }
});

export const useUser = (id) => useQuery({
  queryKey: ['user', id],
  queryFn: async () => {
    const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
  }
});

export const useCreateUser = () => useMutation({
  mutationFn: async (newUser) => {
    const { data, error } = await supabase.from('users').insert(newUser);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('users')
});

export const useUpdateUser = () => useMutation({
  mutationFn: async (updatedUser) => {
    const { data, error } = await supabase.from('users').update(updatedUser).eq('id', updatedUser.id);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('users')
});

export const useDeleteUser = () => useMutation({
  mutationFn: async (id) => {
    const { data, error } = await supabase.from('users').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('users')
});

// Hooks for posts table
export const usePosts = () => useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) throw new Error(error.message);
    return data;
  }
});

export const usePost = (id) => useQuery({
  queryKey: ['post', id],
  queryFn: async () => {
    const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
  }
});

export const useCreatePost = () => useMutation({
  mutationFn: async (newPost) => {
    const { data, error } = await supabase.from('posts').insert(newPost);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('posts')
});

export const useUpdatePost = () => useMutation({
  mutationFn: async (updatedPost) => {
    const { data, error } = await supabase.from('posts').update(updatedPost).eq('id', updatedPost.id);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('posts')
});

export const useDeletePost = () => useMutation({
  mutationFn: async (id) => {
    const { data, error } = await supabase.from('posts').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('posts')
});

// Hooks for comments table
export const useComments = () => useQuery({
  queryKey: ['comments'],
  queryFn: async () => {
    const { data, error } = await supabase.from('comments').select('*');
    if (error) throw new Error(error.message);
    return data;
  }
});

export const useComment = (id) => useQuery({
  queryKey: ['comment', id],
  queryFn: async () => {
    const { data, error } = await supabase.from('comments').select('*').eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
  }
});

export const useCreateComment = () => useMutation({
  mutationFn: async (newComment) => {
    const { data, error } = await supabase.from('comments').insert(newComment);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('comments')
});

export const useUpdateComment = () => useMutation({
  mutationFn: async (updatedComment) => {
    const { data, error } = await supabase.from('comments').update(updatedComment).eq('id', updatedComment.id);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('comments')
});

export const useDeleteComment = () => useMutation({
  mutationFn: async (id) => {
    const { data, error } = await supabase.from('comments').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
  onSuccess: () => queryClient.invalidateQueries('comments')
});

export { supabase, queryClient };