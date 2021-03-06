/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IGetDotnetInfo } from "../../../src/constants/IGetDotnetInfo";

export const fakeDotnetInfo = "myDotnetInfo";
export const FakeGetDotnetInfo: IGetDotnetInfo = async () => Promise.resolve(fakeDotnetInfo);