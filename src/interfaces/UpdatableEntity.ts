export default abstract class UpdatableEntity {
    abstract update(keys?: Map<string, boolean>): void;
}
