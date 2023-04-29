import type { Plugin } from '@capacitor/core';

export interface ExamplePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}


export interface MyPluginPlugin extends Plugin {
  
  getMessage(filter: string): Promise<{ results: any[] }>;
  
}
