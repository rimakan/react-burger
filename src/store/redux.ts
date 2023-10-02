import { createAsyncThunk as createReduxAsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

export function createAsyncThunk<Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg>,
) {
  return createReduxAsyncThunk<Returned, ThunkArg>(typePrefix, payloadCreator);
}
