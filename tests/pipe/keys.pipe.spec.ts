/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import {KeysPipe} from '../../src/pipe/keys.pipe';

describe('keysPipe Tests', () => {
    const value = {'one': 1 , 'two' : 2, 'three' : 3 } ;
    let pipe: KeysPipe;

    beforeEach(() => {
        pipe = new KeysPipe();
    });
    it('Should associate key to a value ', () => {
        const result = pipe.transform(value, null);
        expect(result).toEqual([{key : 'one' , value : 1 }, {key : 'two' , value : 2 }, {key : 'three' , value : 3 }]);
    });
});
