import { rest } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { server } from '../setupTests';
import { createWrapper } from './utils';
import { useAppConfig } from '../api/hooks';
import sampleAppConfig from './sampleResponseData/sampleAppConfig.json';

describe('App config query hook', () => {
  it('successful app config query hook', async () => {
    const { result } = renderHook(() => useAppConfig(1), {
      wrapper: createWrapper(),
    });

    // await waitFor(() => result.current.isSuccess);
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toStrictEqual(sampleAppConfig);
  });

  it('failure app config query hook', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    const { result } = renderHook(() => useAppConfig(1), {
      wrapper: createWrapper(),
    });

    // await waitFor(() => result.current.isError);
    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
