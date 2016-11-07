import * as React from 'react'

export interface PropsDefine {
    /**
     * 插件列表
     */
    plugins?: Array<FitGaea.Plugin>

    [x: string]: any
}

export class Props implements PropsDefine {
    plugins = [] as Array<FitGaea.Plugin>
}

export interface StateDefine {

}

export class State implements StateDefine {

}