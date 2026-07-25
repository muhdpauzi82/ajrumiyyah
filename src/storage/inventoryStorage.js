const INVENTORY_KEY = "ajrumiyyahInventory";

const defaultInventory = {
  books: {
    perpustakaanIrab: [],
  },

  completedLocations: [],

  unlockedLocations: [
    "marfu",
  ],

  manuscripts: [],
};

function getInventory() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(INVENTORY_KEY) || "{}"
    );

    return {
      ...defaultInventory,
      ...saved,

      books: {
        ...defaultInventory.books,
        ...(saved.books || {}),
      },

      completedLocations:
        saved.completedLocations || [],

      unlockedLocations:
        saved.unlockedLocations ||
        defaultInventory.unlockedLocations,

      manuscripts:
        saved.manuscripts || [],
    };
  } catch {
    return defaultInventory;
  }
}

function saveInventory(inventory) {
  localStorage.setItem(
    INVENTORY_KEY,
    JSON.stringify(inventory)
  );

  return inventory;
}

function getCompletedIrabBooks() {
  const inventory = getInventory();

  return (
    inventory.books?.perpustakaanIrab || []
  );
}

function isIrabBookCompleted(bookId) {
  return getCompletedIrabBooks().includes(bookId);
}

function completeIrabBook(bookId) {
  const inventory = getInventory();

  const completedBooks =
    inventory.books?.perpustakaanIrab || [];

  if (!completedBooks.includes(bookId)) {
    completedBooks.push(bookId);
  }

  const bookOrder = [
    "marfu",
    "mansub",
    "majrur",
    "majzum",
  ];

  const currentIndex = bookOrder.indexOf(bookId);
  const nextBook = bookOrder[currentIndex + 1];

  const unlockedLocations = [
    ...(inventory.unlockedLocations || []),
  ];

  if (
    nextBook &&
    !unlockedLocations.includes(nextBook)
  ) {
    unlockedLocations.push(nextBook);
  }

  return saveInventory({
    ...inventory,

    books: {
      ...inventory.books,
      perpustakaanIrab: completedBooks,
    },

    unlockedLocations,
  });
}

function isLocationUnlocked(locationId) {
  const inventory = getInventory();

  return inventory.unlockedLocations.includes(
    locationId
  );
}

function completeIrabLibrary() {
  const inventory = getInventory();

  const completedLocations = [
    ...(inventory.completedLocations || []),
  ];

  const manuscripts = [
    ...(inventory.manuscripts || []),
  ];

  if (
    !completedLocations.includes(
      "perpustakaanIrab"
    )
  ) {
    completedLocations.push(
      "perpustakaanIrab"
    );
  }

  if (
    !manuscripts.includes(
      "makhtutah-alamat-al-irab"
    )
  ) {
    manuscripts.push(
      "makhtutah-alamat-al-irab"
    );
  }

  if (
    !inventory.unlockedLocations.includes(
      "lorongLatihanIrab"
    )
  ) {
    inventory.unlockedLocations.push(
      "lorongLatihanIrab"
    );
  }

  return saveInventory({
    ...inventory,
    completedLocations,
    manuscripts,
  });
}

export const inventoryStorage = {
  getInventory,
  getCompletedIrabBooks,
  isIrabBookCompleted,
  completeIrabBook,
  isLocationUnlocked,
  completeIrabLibrary,
};