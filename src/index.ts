import { PluginOption } from 'vite';
import { generate } from 'peggy';

export default function peggyPlugin(): PluginOption {
  return {
    name: 'vite-peggy-plugin',
    async transform(grammar, id) {
      if (!id.endsWith(".pegjs")) return;

      const code = generate(grammar, { output: "source", format: "es" });

      return {
        code
      };
    }
  };
}