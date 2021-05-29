package repositories

import (
	"be_api/db"
	"be_api/dbmodels"
	"fmt"
)

type CategoryRepository interface {
	GetCategoryById(categoryId string) (*dbmodels.Categories, error)
}

func (repo *Repository) GetCategoryById(categoryId string) (*dbmodels.Categories, error) {
	var model dbmodels.Categories
	dB := db.Db
	if err := dB.Model(&dbmodels.Categories{}).Where("category_id = ?", categoryId).First(&model).Error; err != nil {
		fmt.Println("GetById", err)
		return nil, err
	}
	return &model, nil
}