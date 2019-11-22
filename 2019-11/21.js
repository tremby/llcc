function chooseRecipe(bakeryA, bakeryB, recipes) {
  return recipes.find(({ name, ingredients }) => {
    // Discard recipes which don't have exactly two ingredients
    if (ingredients.length !== 2) return false

    /**
     * Karnaugh map for acceptable recipes
     *
     *                        Bakery A has
     *                        first/second
     *                         ingredient
     *                  | 0/0   0/1   1/1   1/0
     *               ---+----------------------
     *               0/0|  0     0     0     0   (a)
     *                  |             +-------+
     * Bakery B has  0/1|  0     0(c) |1     1|
     * first/second     |       +-----+-+ X   |
     *   ingredient  1/1|  0    |1    |1|    1|
     *                  |       |   Y +-+-----+
     *               1/0|  0    |1     1|    0(d)
     *                          +-------+
     *                    (b)
     *
     * - (a) Row 1 is not OK because bakery B has neither ingredient
     * - (b) Column 1 is not OK because bakery A has neither
     *   ingredient
     * - (c) Row 2 column 2 is not OK because neither bakery has the
     *   first ingredient
     * - (d) Row 4 column 4 is not OK because neither bakery has the
     *   second ingredient
     * - All other situations are OK
     *
     * One way to group the acceptable states is with two boxes as
     * shown, X and Y.
     * - X is whenever A is in 1/? state AND B is in ?/1 state,
     *   which means A has first and B has second.
     * - Y is whenever A is in ?/1 state AND B is in 1/? state,
     *   which means A has second and B has first.
     * - We need either or both of these to be true, so we want
     *   (X OR Y).
     */
    return bakeryA.includes(ingredients[0]) && bakeryB.includes(ingredients[1])
      || bakeryA.includes(ingredients[1]) && bakeryB.includes(ingredients[0])
  }).name
}
