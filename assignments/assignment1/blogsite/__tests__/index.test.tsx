import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/pages/index'
import BlogCard from '@/components/BlogCard/BlogCard';
import "fake-indexeddb/auto";
import { getAllPosts } from '@/utils/sanity/sanityFetch';
import { useSession } from 'next-auth/react';

jest.mock("next-auth/react");

(useSession as jest.Mock).mockReturnValue({
  data: {
    user: {
      username: "jeffrafter",
    },
  },
  status: "authenticated",
});

jest.mock('next/router', () => {
  const originalModule = jest.requireActual('next-router-mock');
  return {
    __esModule: true,
    ...originalModule,
    useRouter: jest.fn(() => {
      return ({
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn()
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null)
      });
    }),
  };
})

let posts:any = []
describe('Home Page', () => {
  it('should render successfully!!', async () => {
    
    posts = await getAllPosts();
    const { container } = render(
      <Home posts={posts} />
    );
    expect(container).toMatchSnapshot();
  })

  it('should have match title in one of the post', async () => {
    const { getByText } = render(<Home posts={posts} />);
    await waitFor(() => {
      expect(getByText("Tomorrow's Tech: A Deep Dive into Upcoming Breakthroughs").innerHTML).toBe("Tomorrow's Tech: A Deep Dive into Upcoming Breakthroughs");
    })
  })
})
