/**
 * Утилита для работы с классами CSS
 * Используется для условного объединения классов в компонентах
 * @param classes - массив классов или объектов с условиями
 * @returns строка с объединенными классами
 */

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean>
  | ClassValue[];

/**
 * Объединяет классы CSS в одну строку
 * Поддерживает строки, числа, объекты с условиями и массивы
 * @param classes - классы для объединения
 * @returns строка с объединенными классами
 */
export function className(...classes: ClassValue[]): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (!cls) continue;

    if (typeof cls === 'string' && cls.trim()) {
      result.push(cls.trim());
    } else if (typeof cls === 'number') {
      result.push(String(cls));
    } else if (Array.isArray(cls)) {
      const nested = className(...cls);
      if (nested) result.push(nested);
    } else if (typeof cls === 'object') {
      for (const [key, value] of Object.entries(cls)) {
        if (value && key) {
          result.push(key);
        }
      }
    }
  }

  return result.join(' ');
}
